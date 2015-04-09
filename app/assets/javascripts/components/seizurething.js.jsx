var SeizureMachine = React.createClass({
	getInitialState: function(){
		return{
			color: [0, 0, 0]
		};
	},

	changeColors: function(r, g, b){
		return(
			this.setState({color: [r, g, b]})
			);
	},

	colorGenerator: function(){
			var r = Math.random() * 256
			var g = Math.random() * 256
			var b =  Math.random() * 256
			this.changeColors(r, g, b);
	},
	componentDidMount: function(){
		this.interval = setInterval(this.colorGenerator);

	},
	render: function(){
		var divStyle = {
			backgroundColor: '({this.state.color[0]}, {this.state.color[1]}, {this.state.color[2]})',
			width: 500,
			height: 500
		}
		return (<div style={divStyle} className="seizure container">Hi</div>);
	}
});