package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetCommunityPostResponse(

	@field:SerializedName("data")
	val data: List<GetCommunityPostResponseDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class GetCommunityPostResponseCount(

	@field:SerializedName("PostComment")
	val postComment: Int? = null
)

data class GetCommunityPostResponseUser(

	@field:SerializedName("firstName")
	val firstName: String? = null,

	@field:SerializedName("lastName")
	val lastName: String? = null,

	@field:SerializedName("image")
	val image: Any? = null,

	@field:SerializedName("middleName")
	val middleName: Any? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("email")
	val email: String? = null
)

data class GetCommunityPostResponseDataItem(

	@field:SerializedName("_count")
	val count: GetCommunityPostResponseCount? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("title")
	val title: String? = null,

	@field:SerializedName("userId")
	val userId: Int? = null,

	@field:SerializedName("user")
	val user: User? = null,

	@field:SerializedName("content")
	val content: String? = null
)
