package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class LogoutResponse(

	@field:SerializedName("ok")
	val ok: Boolean,

	@field:SerializedName("message")
	val message: String
)
