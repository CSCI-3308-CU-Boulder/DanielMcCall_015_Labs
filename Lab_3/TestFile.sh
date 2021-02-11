#!/usr/bin/bash

count_lines () {
	echo "The number of lines in the file is "
	awk 'END { print NR }' $FILE
}

count_words () {
	egrep "(Lorem|model|Ipsum|will)" $FILE
}

add_text () {
	echo "Please input text to add to the end of the file"
	read text
	echo $text >> $FILE

}

copy_and_exit () {
	mkdir solution
	cp $FILE solution
	exit
}

menu () {

	while true
	do
		read -p "Please select a function to call " response
		case $response in
			count_lines)
				count_lines
				;;
			count_words)
				count_words
				;;
			add_text)
				add_text
				;;
			copy_and_exit)
				copy_and_exit
				;;
		esac		
	done
}

FILE=$1

if [[ -f "$1" ]]; then
	menu
else
	echo "ERROR: Not a valid file"
	exit
fi

