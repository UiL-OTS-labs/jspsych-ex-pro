import csv
import base64
import sys
import os
from pathlib import Path


def process_responses(name, file_in, file_out):
    reader = csv.DictReader(file_in)
    writer = csv.DictWriter(file_out, reader.fieldnames)
    writer.writeheader()
    Path('audio').mkdir(exist_ok=True)

    for row in reader:
        if row.get('trial_type') == 'sound-board-trial':
            audio_data = base64.b64decode(row['audio'])
            ext = 'wav'  # default fallback
            if audio_data.startswith(b'Ogg'):
                ext = 'ogg'
            elif b'webm' in audio_data[:100]:
                ext = 'webm'

            audio_name = 'audio/{}_{}.{}'.format(name, row['id'].zfill(4), ext)
            with open(audio_name, 'wb') as audio_file:
                audio_file.write(audio_data)
                print('Wrote ', audio_name)
            row['audio'] = audio_name
        writer.writerow(row)


def main(args):
    """assumes a list of input files as arguments"""
    out_dir = Path('processed')
    out_dir.mkdir(exist_ok=True)
    csv.field_size_limit(sys.maxsize)

    for arg in args:
        filename = arg
        name = os.path.splitext(filename)[0]
        output = out_dir / (name + '.processed.csv')

        with open(filename, 'r') as file_in:
            with open(output, 'w') as file_out:
                process_responses(name, file_in, file_out)
        print('Wrote ', output)


if __name__ == '__main__':
    if len(sys.argv) > 1:
        main(sys.argv[1:])
    else:
        print('Usage: preprocess.py csv_file [csv_file2] ...\n\n'
              'Please pass one or more input files as arguments')
