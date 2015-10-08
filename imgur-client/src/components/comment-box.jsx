var React = require('react');

module.exports = React.createClass({
	render: function () {
		return <div className="list-group">
			{this.renderComments()}
		</div>
	},
	renderComments: function () {
		return this.props.comments.slice(0, 20).map(function (comment) {
			return <li className="list-group-item" key={comment.id}>
				<span className="badge">{comment.ups}</span>
				<h5>{comment.author}</h5>
				{comment.comment}
			</li>
		})
	}
});
