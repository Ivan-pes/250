"""Готовит фотографии сайта к работе.

Запуск из корня проекта:

    python3 scripts/photos.py

Для каждого снимка в public/images скрипт делает уменьшенную копию `@sm`
(её грузят телефоны) и пересобирает src/data/photos.js — карту крошечных
размытых превью, которые видны, пока фото не загрузилось.

Нужен Pillow: pip3 install pillow
"""

import base64
import io
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(ROOT, 'public', 'images')
PHOTOS_JS = os.path.join(ROOT, 'src', 'data', 'photos.js')

SM_WIDTH = 760      # ширина уменьшенной копии
BLUR_WIDTH = 20     # ширина превью-заглушки


def originals():
    """Снимки в папке, кроме уже готовых копий @sm."""
    names = [f for f in os.listdir(IMAGES) if f.endswith('.jpg') and '@sm' not in f]
    return sorted(names)


def make_small(image, name):
    width = min(SM_WIDTH, image.width)
    height = round(image.height * width / image.width)
    small = image.resize((width, height), Image.LANCZOS)
    small.save(os.path.join(IMAGES, name.replace('.jpg', '@sm.jpg')),
               'JPEG', quality=78, optimize=True, progressive=True)


def make_blur(image):
    height = max(1, round(image.height * BLUR_WIDTH / image.width))
    tiny = image.resize((BLUR_WIDTH, height), Image.LANCZOS)

    buffer = io.BytesIO()
    tiny.save(buffer, 'JPEG', quality=40)
    return 'data:image/jpeg;base64,' + base64.b64encode(buffer.getvalue()).decode()


def main():
    lines = ['export const photos = {']

    for name in originals():
        image = Image.open(os.path.join(IMAGES, name)).convert('RGB')
        make_small(image, name)

        key = '/images/' + name
        lines.append(f"  '{key}': {{")
        lines.append(f"    sm: '/images/{name.replace('.jpg', '@sm.jpg')}',")
        lines.append(f"    blur: '{make_blur(image)}',")
        lines.append('  },')
        print('готово:', name)

    lines.append('};')

    with open(PHOTOS_JS, 'w') as file:
        file.write('\n'.join(lines) + '\n')

    print('\nphotos.js обновлён')


if __name__ == '__main__':
    main()
