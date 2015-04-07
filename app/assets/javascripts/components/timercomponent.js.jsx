var Task = React.createClass({
	getInitialState: function(){
		return {
			task: this.props.task
		};
	},
	render: function(){
		return(
			<div>{this.state.task}</div>
			);
	}
});

var Timer = React.createClass({
	getInitialState: function(){
		return{
			timeRemaining: 0
		};
	},
	tick: function(){

		var actualTimeRemaining = this.state.timeRemaining + 1;
		if (actualTimeRemaining == 500){
			this.setState({timeRemaining: "Boom"});
			clearInterval(this.interval);
		}else{
			this.setState({timeRemaining: actualTimeRemaining})
		} 
	},
	stopTick: function(){
		started = false;
		clearInterval(this.interval);
	},

	startTick: function(){
		
		this.interval = setInterval(this.tick, 1000);
	},
	render: function(){
		return(
			<div>
				<div className="row text-center">{this.state.timeRemaining}</div>
				<div className="buttonrow row text-center">
					<button onClick={this.startTick} className="start btn btn-primary">Start</button>
					<button onClick={this.stopTick} className="stop btn btn-warning">Stop</button>
				</div>
			</div>
			);
	}
});
var TaskBox = React.createClass({
	getInitialState: function(){
		return{
			tasks: this.props.tasks
		};
	},

	render: function(){
		var taskNodes = this.props.tasks.map(function(task){
			return(
				<div className="col-sm-4">
					<div className="taskBox panel panel-default"> 
						<div className="panel-heading">
							<h1 className="panel-title text-center"><Task task={task} /> </h1>
						</div> 
						<div className="panel-body">
							<b><Timer /></b> 
						</div>
					</div>
				</div>
				);
			});
		return(<div>{taskNodes}</div>);
		}
	});


React.renderComponent(<TaskBox />);