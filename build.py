#!/usr/bin/env python3
"""Składa grę: src/template.html + src/data.js -> www/index.html"""
from pathlib import Path
root=Path(__file__).parent
t=(root/'src/template.html').read_text(encoding='utf-8')
d=(root/'src/data.js').read_text(encoding='utf-8')
(root/'www/index.html').write_text(t.replace('/*DATA*/',d),encoding='utf-8')
print('OK: www/index.html')
