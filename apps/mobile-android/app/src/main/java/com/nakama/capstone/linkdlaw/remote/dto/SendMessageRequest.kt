package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class SendMessageRequest(

	@field:SerializedName("chatId")
	val chatId: Int? = null,

	@field:SerializedName("to")
	val to: Int? = null,

	@field:SerializedName("message")
	val message: String? = null
)
