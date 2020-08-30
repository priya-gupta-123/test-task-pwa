import React, { Component } from 'react'
import * as Icon from 'react-feather';
export default class footer extends Component {
    render() {
        return (
			<div className="container-fluid">
                <div className="row  p-2" style={{backgroundColor:'green'}}>
					<div className="col-4 text-center">
						<Icon.Home color='white' size={32} />
					</div>
					<div className="col-4 text-center">
						<Icon.PlusCircle color='white' size={32} />
					</div>
					<div className="col-4 text-center">
						<Icon.Settings color='white' size={32} />
					</div>
				</div>
				</div>
        )
    }
}
