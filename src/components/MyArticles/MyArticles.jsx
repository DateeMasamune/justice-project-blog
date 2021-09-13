import React from 'react';

import './MyArticles.scss';
import {photo} from "../images";
import {user} from "../images";
import {UserAvatar} from "./UserAvatar/UserAvatar";
import {UserArticle} from "./UserArticle/UserArticle";
import {PaginationButton} from "../Home/PaginationButton/PaginationButton";

export const MyArticles = () => {
	return (
		<div className='container'>
			<div className='content myArticles'>
				{
					user.map(item => (
						<UserAvatar userData={item} />
					))
				}
				<div className='articlesList'>
					{
						photo.map(item => (
							<UserArticle dataArticle={item}/>
						))
					}
					<div className='paginationArticle'>
						<PaginationButton name={'Prev'} />
						<PaginationButton name={'Next'} />
					</div>
				</div>
			</div>
		</div>
	)
}