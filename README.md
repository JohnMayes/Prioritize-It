# Priortize It
 Priority App

##Description
Help a person prioritize a list of to-do items using reletive ranking of two items at a time.

##Priority Rating
- accept a written list of to-do items
- present items two at a time
- user selects which of the two items has higher priority
- show results to user ranked highest to lowest priority
- stored in browser 

##Secondary goals
- delete / mark as done items on list
- after change in list, re-establish list?

##User Interface
- 3 screens
	1 Enter list
	2 Display and select relitive priority
	3 View priority sorted list

- Screen 1
	- Text field
	- Should produce an array of objects (value, incriment) (indexDB value "list")

- Screen 2
	- Show user two buttons from array, user selects the button of higher priority
	- Store final list in indexDB "list"

- Screen 3 
	- Output list read from DB outputed into ordered list

##Unit test it yo
- Function that takes in an array, and returns an array of pairs of every possible combination of items
- Incriment vaule of each item per dom.onclick
- return ordered list sorted by number of times chosen 

##Specific to dos
- make dummy html page that when pushed to github is live 
