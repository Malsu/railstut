class DashboardsController < ApplicationController

	def show
		#@demos = Demos.all
		@demos = Demo.all
	end

end
