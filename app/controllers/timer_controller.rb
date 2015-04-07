class TimerController < ApplicationController
	def index
		@tasks = ['Buy Milk', 'Buy Bread', 'Do laundry', 'Walk the dog', 'Teach Nelson to code better', 'Openly Weep']
	end
end
