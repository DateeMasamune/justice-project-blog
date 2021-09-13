import React from "react";

import './ArticlePage.scss';
import {articlesData} from "../../services/mock";
import imageForPage from '../../assets/img/Rectangle 39.svg';

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
							{articlesData[0].hasTag}
						</div>
						<div className='nameArticle page'>
							{articlesData[0].nameArticle}
						</div>
						<img className='pic' src={articlesData[0].pictureSrc} alt={articlesData[0].namePicture}/>
						<div className='infoArticle page'>
							<div className='discriptionArticle page'>
								<div className="textPage">
									An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.
								</div>
								<div className="textPage">
									The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.
								</div>
								<div className="textPage">
									But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. We have to go 500 years back in time to meet the first one.
								</div>
								<h2>The first transition</h2>
								<div className="textPage">
									A similar conflict emerged after the invention of the first printing press in Europe. Johannes Gutenberg invented movable type and used it to produce different compositions. His workshop could print up to 240 impressions per hour. Until then, the books were being copied by hand. All the books were handwritten and decorated with hand drawn ornaments and figures. A process of copying a book was long but each book, even a copy, was a work of art.
								</div>
								<div className="textPage">
									The first printed books were, at first, perceived as inferior to the handwritten ones. They were smaller and cheaper to produce. Movable type provided the printers with flexibility that allowed them to print books in languages other than Latin. Gill describes the transition to industrialism as something that people needed and wanted. Something similar happened after the first printed books emerged. People wanted books in a language they understood and they wanted books they could take with them. They were hungry for knowledge and printed books satisfied this hunger.
								</div>
								<img className='pic2' src={imageForPage} alt='' />
								<div className="textPage">
									The 42–Line Bible, printed by Gutenberg.
									But, through this transition, the book lost a large part of its humanity. The machine took over most of the process but craftsmanship was still a part of it. The typefaces were cut manually by the first punch cutters. The paper was made by hand. The illustrations and ornaments were still being hand drawn. These were the remains of the craftsmanship that went almost extinct in the times of Eric Gill.
								</div>
								<h2>Chasing perfection</h2>
								<div className="textPage">
									Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what we want to communicate with it? What will be the leading and why? Will there be more typefaces in our design? On what ground will they be combined? What makes our design unique and why? This is the part of humanity that is left in typography. It might be the last part. Are we really going to give it up?
								</div>
							</div>
							<div className="flexUser">
							<div className='userInfo page'>
								<div className='iconUser page'>
									<img className="iconImg" src={articlesData[0].iconSrc} alt={articlesData[0].namePicture}/>
									<span>
												{articlesData[0].nameUser}
											</span>
								</div>
								<div className='dataArticle page'>
									<img src={articlesData[0].date} alt={articlesData[0].namePicture}/>
								</div>
								<div className='viewArticle page'>
									<img src={articlesData[0].viewSrc} alt={articlesData[0].namePicture}/>
									<span className='num'>{articlesData[0].viewNum}</span>
								</div>
								<div className='button'>
									Typography
								</div>
							</div>
							<div className="button unset">
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