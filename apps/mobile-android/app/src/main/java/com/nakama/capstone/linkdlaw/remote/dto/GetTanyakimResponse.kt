package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetTanyakimResponse(

	@field:SerializedName("Pasal")
	val pasal: String? = null,

	@field:SerializedName("Isi")
	val isi: String? = null
)
