package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetAllMessageResponse(

	@field:SerializedName("data")
	val data: List<MessageDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class MessageDataItem(

	@field:SerializedName("chatId")
	val chatId: Int? = null,

	@field:SerializedName("from")
	val from: Int? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("to")
	val to: Int? = null,

	@field:SerializedName("time")
	val time: String? = null,

	@field:SerializedName("message")
	val message: String? = null
)
