package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetPredictRequest(

	@field:SerializedName("text")
	val text: String? = null
)
