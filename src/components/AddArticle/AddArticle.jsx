import React from "react";

import "./AddArticle.scss";
import {ButtonAddArticle} from "./ButtonAddArticle/ButtonAddArticle";

export const AddArticle = () => {
	return (
		<div className='container'>
			<div className='content'>
				<div className='title'>
					<h1>Add Article</h1>
				</div>
				<div className='addArticle'>
					<div className='descriptionArticle'></div>
					<div className='buttons'>
						<ButtonAddArticle text={'Publish an article'} />
						<ButtonAddArticle text={'Publish an article'} />
					</div>
				</div>
			</div>
		</div>
	)
}