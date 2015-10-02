var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
	getTopics: function () {
		return Api.get('topics/defaults') // Promise Return
			.then(function (json) {
				this.topics = json.data;
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function () {
		this.trigger('change', this.topics);
	}
});
