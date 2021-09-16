import React, {useState} from "react";
import {EditorState} from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import {convertToHTML} from "draft-convert";

import {ButtonAddArticle} from "./ButtonAddArticle/ButtonAddArticle";

import "./AddArticle.scss";
import 'draft-js/dist/Draft.css';
import convertFromHTML from "draft-convert/lib/convertFromHTML";

export const AddArticle = () => {
	const [editorState, setEditorState] = useState(
		EditorState.createEmpty()
	);
	// console.log('===>editorState.getCurrentContent()', editorState.getCurrentContent());
	// console.log('===>editorState', editorState.toJS());
	
	const  html  =  convertToHTML(editorState.getCurrentContent());
	const test = EditorState.createWithContent(convertFromHTML(html));
	console.log('===>test', test);
	// const html = convertToHTML({
	// 	styleToHTML: (style) => {
	// 		console.log('===>style', style);
	// 		if (style === 'BOLD') {
	// 			return <span style={{color: 'blue'}} />;
	// 		}
	// 	},
	// 	blockToHTML: (block) => {
	// 		if (block.type === 'PARAGRAPH') {
	// 			return <p />;
	// 		}
	// 	},
	// 	entityToHTML: (entity, originalText) => {
	// 		if (entity.type === 'LINK') {
	// 			return <a href={entity.data.url}>{originalText}</a>;
	// 		}
	// 		return originalText;
	// 	}
	// })(editorState.getCurrentContent());
	console.log('===>html', html);
	const handleValueInput = (e) => {
		const {value, name} = e.target
	}

	return (
		<div className='container'>
			<div className='content'>
				<div className='title'>
					<h1>Add Article</h1>
				</div>
				<div className='addArticle'>
					<div className='descriptionArticle'>
						<div className='inputBlock'>
							<input
								name='title'
								type='text'
								placeholder='Enter a title'
								onChange={handleValueInput}
							/>
							<input
								name='category'
								type='text'
								placeholder='Enter the category name...'
								onChange={handleValueInput}
							/>
						</div>
						<div className="editor">
							<Editor
								editorState={editorState}
								toolbarClassName="toolbarClassName"
								wrapperClassName="wrapperClassName"
								editorClassName="editorClassName"
								type="text"
								onEditorStateChange={(e) => {
									setEditorState(e)
								}}
							/>
						</div>
					</div>

					<div className='buttons'>
						<ButtonAddArticle text={'Publish an article'} />
						<ButtonAddArticle text={'Publish an article'} />
					</div>
				</div>
				<div className='viewHtml'
						 dangerouslySetInnerHTML={{ __html: `${html}` }}
				/>
			</div>
		</div>
	)
}