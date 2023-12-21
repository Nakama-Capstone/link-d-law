package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class CreateChatRequest(

	@field:SerializedName("user2_id")
	val user2Id: Int? = null
)
