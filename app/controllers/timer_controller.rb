class TimerController < ApplicationController
	def index
		@tasks = Task.all
	end
end
