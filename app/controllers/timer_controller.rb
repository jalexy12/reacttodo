class TimerController < ApplicationController
	def index
		@tasks = Task.all
		@new_tasks = @tasks.map do |task|
			task.name
		end
		7.times do 
			@actual_tasks = 
	end
end
