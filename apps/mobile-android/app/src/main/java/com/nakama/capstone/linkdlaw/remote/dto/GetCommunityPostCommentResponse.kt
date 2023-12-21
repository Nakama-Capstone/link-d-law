package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetCommunityPostCommentResponse(

	@field:SerializedName("data")
	val data: List<GetCommunityPostCommentResponseDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class GetCommunityPostCommentResponseUser(

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

data class GetCommunityPostCommentResponseDataItem(

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("postId")
	val postId: Int? = null,

	@field:SerializedName("userId")
	val userId: Int? = null,

	@field:SerializedName("user")
	val user: GetCommunityPostCommentResponseUser? = null,

	@field:SerializedName("content")
	val content: String? = null
)
