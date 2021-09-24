import React, {useEffect, useState} from "react";
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import axios from "axios";
import FormData from 'form-data'

import image15 from '../../assets/img/mainPage/Vector.png';
import image11 from '../../assets/img/mainPage/image 14-5.png';

import "./AddArticle.scss";
import 'draft-js/dist/Draft.css';
import './ButtonAddArticle/ButtonAddArticle';

export const AddArticle = () => {

	const bodyFormData = new FormData();
	const [file, setFile] = useState(null)
	const [user, setUser] = useState([])
	const [editorState, setEditorState] = useState(
		EditorState.createEmpty()
	);
	const [dataArticle, setDataArticle] = useState({
		date: "",
		description: "",
		hasTag: "",
		iconSrc: image11,
		id: Date.now(),
		nameArticle: "",
		namePicture: "",
		nameUser: user.firstName,
		pictureSrc: "",
		userCreate: user._id,
		viewNum: 0,
		viewSrc: image15
	})
	const rawContentState = convertToRaw(editorState.getCurrentContent());
	const contentHTML = draftToHtml(rawContentState);
	const [valid, setValid] = useState({
		validTitle: false,
		validCategory: false,
		validContentHtml: false,
		allValid: false,
	})

	const uploadFile = (e) => {
		setFile(e.target.files[0])
	}

	useEffect(()=>{
		axios.post(
			'http://localhost:5000/api/articles/get_user',
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res)=>{
				console.log('===>res', res);
				setUser(res.data)
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
	},[])

	const handleNewArticle = () => {

		dataArticle.description = contentHTML
		if (contentHTML.length > 8) {
			valid.validContentHtml = true
		} else {
			valid.validContentHtml = false
		}

		if (valid.validTitle &&
			valid.validCategory &&
			valid.validContentHtml) {
			setValid((prevState) => ({
				...prevState,
				allValid: true,
			}))

			const json = {
				nameArticle: dataArticle.nameArticle,
				pictureSrc: '',
				description: dataArticle.description,
				viewNum: dataArticle.viewNum,
				date: dataArticle.date,
				viewSrc: dataArticle.viewSrc,
				hasTag: dataArticle.hasTag,
				iconSrc: dataArticle.iconSrc
			}

			/*добавление статьи в базу данных*/
			bodyFormData.append('image',file)
			bodyFormData.append('document',JSON.stringify(json))
			axios.post('http://localhost:5000/api/articles',bodyFormData ,
				{
					headers: {
						"Authorization": JSON.parse(localStorage.getItem('token')),
					}
				}).then((res) => {
				console.log('===>res', res);
			}).catch((error) => {
				console.log('===>error', error);
			})
			/*добавление статьи в базу данных*/
			setEditorState(EditorState.createEmpty())
		} else {
			setValid((prevState) => ({
				...prevState,
				allValid: false,
			}))
		}
	}

	const handleValueInput = (e) => {
		const {value, name} = e.target

		if (name === 'title') {
			setDataArticle((prevState) => ({
				...prevState,
				nameArticle: value,
				date: new Date().toLocaleDateString(),
			}))

			if (value !== '') {
				setValid((prevState) => ({
					...prevState,
					validTitle: true,
				}))
			} else {
				setValid((prevState) => ({
					...prevState,
					validTitle: false,
				}))
			}
		} else {
			setDataArticle((prevState) => ({
				...prevState,
				hasTag: '#' + value,
			}))

			if (value !== '') {
				setValid((prevState) => ({
					...prevState,
					validCategory: true,
				}))
			} else {
				setValid((prevState) => ({
					...prevState,
					validCategory: false,
				}))
			}
		}
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
								toolbar={{
									image: {
										uploadCallback: "",
										previewImage: true,
										alt: {present: true, mandatory: false},
										inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
									}
								}}
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
						<div
							className='button'
							onClick={handleNewArticle}
						>
							Publish an article
						</div>
						<div className='button'>
							<input type="file" onChange={uploadFile}/>
								Add picture
						</div>
					</div>
					{!valid.allValid ? <p className='errorMsg'>Заполните все поля</p> : ''}
				</div>
				<div className='viewHtml'
						 dangerouslySetInnerHTML={{__html: `${contentHTML}`}}
				/>
			</div>
		</div>
	)
}