var Task = React.createClass({
	getInitialState: function(){
		return {
			task: this.props.task
		};
	},
	render: function(){
		return(
			<div className="col-sm-4">
				<div className="taskBox panel panel-default"> 
					<div className="panel-heading">
						<div className="panel-title"><h3 className="tasktitle text-left">{this.state.task.name}</h3>
						<h4 className="text-right"><b>{this.state.task.priority}</b></h4> 
						</div>
					</div> 
					<div className="panel-body">
						<div className="row text-center">{this.state.task.description}</div>
						<Timer />							
					</div>
				</div>
			</div>
			);
	}
});

var Timer = React.createClass({

	getInitialState: function(){
		return{
			timeRemaining: 0,
			called: 0
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
		if (this.state.called === 1){
			this.state.called--;
			clearInterval(this.interval);
		}else{
			this.state.called = this.state.called;
		}
	},

	startTick: function(){
		var tickInterval = 1000;
		if (this.state.called === 0){
			this.state.called++;
			this.interval = setInterval(this.tick, tickInterval);
		}else{
			this.state.called = this.state.called;
		}
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
					<Task task={task} />
				);
			});
		return(<div>{taskNodes}</div>);
		}
});


// React.renderComponent(<TaskBox />);