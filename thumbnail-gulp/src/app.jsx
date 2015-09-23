var options = {
	thumbnailData: [{
		title: 'Show Courses',
		number: 32,
		header: 'Learn React',
		description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
		imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
	},{ 
		title: 'Show Courses',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gulp will speed up your development process. Gulp will speed up your development process.',
		imageUrl: 'http://brunch.io/images/others/gulp.png'
	}]    
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.container'));
