package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetAllChatResponse(

	@field:SerializedName("data")
	val data: List<ChatDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class ChatDataItem(

	@field:SerializedName("user1_id")
	val user1Id: Int? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("user2_id")
	val user2Id: Int? = null
)
