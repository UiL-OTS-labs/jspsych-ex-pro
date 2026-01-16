#!/usr/bin/env python3

import sys
from csv import DictReader
from argparse import ArgumentParser
import json
import os.path as p
import re

NAME = "csv_to_stim_table"
DESC = "Translates csv to javascript stimulus tables"

# as they are embedded in the csv
DELAYED = ["./stimuli/wav/delay_{}.wav".format(n) for n in range(1, 7)]
HESITANT = ["./stimuli/wav/hesitant_{}.wav".format(n) for n in range(1, 6)]
REMINDER = ["./stimuli/wav/reminder_{}.wav".format(n) for n in range(1, 13)]


class NoSuchStimulus(FileNotFoundError):
    def __init__(self, path):
        super().__init__(f"The file '{path}' ain't found")


def extract_wavs(stimuli: dict) -> set[str]:
    wav_files = set()
    for stim in stimuli:
        for pic in ["space_resp", "r_resp", "click"]:
            path = stim[pic]
            if path:
                wav_files.add(f"./stimuli/wav/{path}")
    return wav_files


def extract_imgs(stimuli: dict) -> set[str]:
    img_files = set()
    for stim in stimuli:
        path = stim["img"]
        if path:
            img_files.add(f"./stimuli/img/{path}")
        thumbs = stim["thumbnails"]
        for thumb in thumbs:
            if thumb:
                img_files.add(f"./stimuli/img/{thumb}")

    return img_files


def check_stims(stimuli: dict) -> list[str]:
    wavs = extract_wavs(stimuli)
    imgs = extract_imgs(stimuli)
    non_existent = []

    for wav in DELAYED + HESITANT + REMINDER + list(wavs):
        if not p.exists(wav):
            non_existent.append(wav)

    for img in imgs:
        if not p.exists(img):
            non_existent.append(wav)

    return non_existent


def parse_csv(filename: str, separator=",") -> [dict]:
    """parses a csv and map the names of the stimuli to the previously named
    stimuli in stimuli.js"""
    with open(filename, "r") as csvfile:
        reader = DictReader(
            csvfile,
        )
        # map to the previous variable names in stimuli.js
        content = [
            {
                "type": obj["type"],
                "id": obj["id"],
                "img": obj["picture0"],
                "thumbnails": [
                    obj["picture1"],
                    obj["picture2"],
                    obj["picture3"],
                    obj["picture4"],
                ],
                "space_resp": obj["space_resp"],
                "r_resp": obj["r_resp"],
                "click": obj["click"],
            }
            for obj in reader
        ]

        return content


def check_and_print_file(filename: str, var_name: str):
    """This function will parse the csv file, check whether the stimuli are
    present and, if stimuli are missing they are reported on stderr, the
    javascript table is printed to stdout this designed to be redirected to a
    file.
    """
    stimuli = parse_csv(filename)

    # check whether stimuli exist
    non_existent = check_stims(stimuli)
    if non_existent:
        print(f"found non existing files in {filename}:", file=sys.stderr)
        for file in non_existent:
            print(" - {}".format(p.basename(file)), file=sys.stderr)

    temp = f"let {var_name} = " + json.dumps(stimuli, indent=" " * 4)
    sub_re = re.compile(r'"(.\w+)":')
    temp = sub_re.sub(r"\g<1>:", temp)
    print(temp)


def main():
    ap = ArgumentParser(NAME, f"{NAME} <prac_csv> <test_csv>", DESC)
    ap.add_argument(
        "practice_csv", help="The csv that describes the practice items", type=str
    )
    ap.add_argument("test_csv", help="The csv that describes the test items")
    args = ap.parse_args()

    check_and_print_file(args.practice_csv, "prac_items")
    check_and_print_file(args.test_csv, "test_items")


if __name__ == "__main__":
    main()
