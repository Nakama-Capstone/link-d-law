package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetAllChatResponse(

	@field:SerializedName("data")
	val data: List<GetChatDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class User2(

	@field:SerializedName("firstName")
	val firstName: String? = null,

	@field:SerializedName("image")
	val image: Any? = null,

	@field:SerializedName("id")
	val id: Int? = null
)

data class MessageItem(

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("time")
	val time: String? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class GetChatDataItem(

	@field:SerializedName("user2")
	val user2: User2? = null,

	@field:SerializedName("Message")
	val message: List<MessageItem?>? = null,

	@field:SerializedName("user1_id")
	val user1Id: Int? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("user2_id")
	val user2Id: Int? = null
)
