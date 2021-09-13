import React from "react";

import './ArticlePage.scss';
import {photo} from "../images";

export const ArticlePage = () => {
	return (
		<div className='container'>
			<div className='content page'>
				<div className='button'>
					All articles
				</div>
				<div className='article'>
					<div className='articles page'>
						<div className='hashTag page'>
							{photo[0].hasTag}
						</div>
						<div className='nameArticle page'>
							{photo[0].nameArticle}
						</div>
						<img className='pic' src={photo[0].pictureSrc} alt={photo[0].namePicture}/>
						<div className='infoArticle page'>
							<div className='discriptionArticle page'>
								An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.

								The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.

								But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. We have to go 500 years back in time to meet the first one.
							</div>
							<div className='title page'>
								The first transition
							</div>
							<div className='discriptionArticle page'>
								A similar conflict emerged after the invention of the first printing press in Europe. Johannes Gutenberg invented movable type and used it to produce different compositions. His workshop could print up to 240 impressions per hour. Until then, the books were being copied by hand. All the books were handwritten and decorated with hand drawn ornaments and figures. A process of copying a book was long but each book, even a copy, was a work of art.

								The first printed books were, at first, perceived as inferior to the handwritten ones. They were smaller and cheaper to produce. Movable type provided the printers with flexibility that allowed them to print books in languages other than Latin. Gill describes the transition to industrialism as something that people needed and wanted. Something similar happened after the first printed books emerged. People wanted books in a language they understood and they wanted books they could take with them. They were hungry for knowledge and printed books satisfied this hunger.
							</div>
							<div className='userInfo page'>
								<div className='iconUser page'>
									<img src={photo[0].iconSrc} alt={photo[0].namePicture}/>
									<span>
												{photo[0].nameUser}
											</span>
								</div>
								<div className='dataArticle page'>
									<img src={photo[0].date} alt={photo[0].namePicture}/>
								</div>
								<div className='viewArticle page'>
									<img src={photo[0].viewSrc} alt={photo[0].namePicture}/>
									<span className='num'>{photo[0].viewNum}</span>
								</div>
								<div className='button'>
									Typography
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}