import react from 'react';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseurl = "https://opengovapi.herokuapp.com/api/v1";


export const createFeed = createAsyncThunk(
	"users/createfeed",
	async ({ feed_title, feed_description, tag,  image}, thunkAPI) => {
		try {


		
      const token = await localStorage.token;


			const cresponse = await fetch(
				"  https://api.cloudinary.com/v1_1/nhubnacademy/image/upload",
				{
					method: "post",
					body: image,
				}
			);

			let cresult = await cresponse.json();

      console.log(cresult);

			const response = await fetch(baseurl + "/feed", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"content-type": "application/json",

					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					feed_title,
					feed_description,
					feed_media: cresult.secure_url,
					tag,
				}),
			});
			let data = await response.json();
			console.log("response", data.newFeed);
			if (data.success) {
				return data.newFeed;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (e) {
			console.log("Error", e.response.data);
			thunkAPI.rejectWithValue(e.response.data);
		}
	}
);


export const createComment = createAsyncThunk(
	"users/createComment",
	async ({comment_description, id}, thunkAPI) => {
		try {

			const token = await localStorage.token;

			const response = await fetch(`${baseurl}/feed/comment/${id}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"content-type": "application/json",

					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
				comment_description
				}),
			});
			let data = await response.json();
			console.log("response", data);
			if (response.status == 201) {
				return data.feed;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (e) {
			console.log("Error", e.response.data);
			thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const getFeeds = createAsyncThunk("users/getfeeds", async (thunkAPI) => {
	try {
		const response = await fetch(baseurl + "/feed", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"content-type": "application/json",
			},
		});
		let data = await response.json();
		console.log("response", data);
		if (response.status === 200) {
			return data.data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (e) {
		console.log("Error", e.response.data);
		thunkAPI.rejectWithValue(e.response.data);
	}
});


export const getComments = createAsyncThunk("users/getcomments", async ({id}, thunkAPI) => {
	try {
		
		const response = await fetch(`${baseurl}/feed/comment/${id}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"content-type": "application/json",
			},
		});
		let data = await response.json();
		console.log("response", data);
		if (response.status === 200) {
			return data.data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (e) {
		console.log("Error", e.response.data);
		thunkAPI.rejectWithValue(e.response.data);
	}
});
