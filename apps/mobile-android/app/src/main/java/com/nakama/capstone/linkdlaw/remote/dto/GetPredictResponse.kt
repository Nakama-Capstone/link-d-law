package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetPredictResponse(

	@field:SerializedName("category")
	val category: String? = null
)
