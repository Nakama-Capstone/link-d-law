package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetNewDetailResponse(

	@field:SerializedName("data")
	val data: GetNewDetailResponseData? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class GetNewDetailResponseData(

	@field:SerializedName("date")
	val date: String? = null,

	@field:SerializedName("image")
	val image: String? = null,

	@field:SerializedName("link")
	val link: String? = null,

	@field:SerializedName("dateHuman")
	val dateHuman: String? = null,

	@field:SerializedName("title")
	val title: String? = null,

	@field:SerializedName("rssurl")
	val rssurl: String? = null,

	@field:SerializedName("content")
	val content: String? = null
)
