import React, { Component } from 'react';
import post1 from '../../images/image1.jpg';
import './Post.css';
import * as Icon from 'react-feather';
class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
		};
	}
	onReadMore = (e) => {
		this.setState({
			isClicked: !this.state.isClicked,
		});

		console.log(this.state.isClicked);
	};

	render() {
		
	let sectionStyle = {
		backgroundImage: `url(${post1})`
	  };
	  
	 


		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
						<div className="card post-card mx-auto d-flex">
					<div className="card-body">
						<div className="row">
							<div className="col-sm-4 text-center ">
								<div className="profileImg" style={ sectionStyle }>
								<img src={post1} className="img-fluid post-img" />
								</div>
							</div>
							<div className="col-sm-8 mt-3">
								<h4>Design Test</h4>
								<p>{this.state.isClicked ? this.props.desc : this.props.desc.substr(0, 200) + '...'}</p>
								<button className="buttonCustom " onClick={this.onReadMore}>
									{this.state.isClicked ? 'Read Less' : 'Read More'}
								</button>
							</div>
						</div>
					</div>
				</div>
			
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Post;
