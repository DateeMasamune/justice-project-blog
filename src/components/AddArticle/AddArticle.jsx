import React, {useState} from "react";
import {EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {Editor} from "react-draft-wysiwyg"

import "./AddArticle.scss";
import {ButtonAddArticle} from "./ButtonAddArticle/ButtonAddArticle";

export const AddArticle = () => {
	const [editorState, setEditorState] = useState(
		EditorState.createEmpty()
	);
	console.log('===>editorState', editorState.toJS());

	return (
		<div className='container'>
			<div className='content'>
				<div className='title'>
					<h1>Add Article</h1>
				</div>
				<div className='addArticle'>
					<div className='descriptionArticle'>
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
				<div className='viewHtml'>

				</div>
			</div>
		</div>
	)
}