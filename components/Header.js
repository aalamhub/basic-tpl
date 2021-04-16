import headerStyles from '../styles/Header.module.css';
import ContentEditable from 'react-contenteditable';
import React, { useRef, useState, useEffect } from 'react';

const Header = () => {
	const [state, setState] = useState({ html: '<b>Hello <i>World</i></b>' });
	// const contentEditable = React.useRef(null)

	useEffect(() => {}, []);

	const handleChange = (evt) => {
		setState({ html: evt.target.value });
	};

	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>WebDev</span> News
			</h1>
			<p contentEditable='true' className={headerStyles.description}>
				Keep up to date with the latest web dev news
			</p>
			{/* <ContentEditable
              innerRef={contentEditable}
              html={state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            /> */}
		</div>
	);
};

export default Header;
