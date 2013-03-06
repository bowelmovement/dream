#!/bin/zsh

for file in `ls *.php`; do
  file=${file%.*}
  cat header.inc "$file.inc" footer.inc > "$file.html"
  cat "$file.html" | sed 's/\.php/\.html/' > "$file.html2"
  mv "$file.html2" "$file.html"
done

rm *.php *.inc