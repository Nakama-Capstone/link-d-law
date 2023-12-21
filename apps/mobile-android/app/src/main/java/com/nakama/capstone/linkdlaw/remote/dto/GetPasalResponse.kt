package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetPasalResponse(

	@field:SerializedName("data")
	val data: List<GetPasalDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class LawDataItem(

	@field:SerializedName("createdAt")
	val createdAt: String? = null,

	@field:SerializedName("pasal")
	val pasal: String? = null,

	@field:SerializedName("lawBabId")
	val lawBabId: Int? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("content")
	val content: String? = null,

	@field:SerializedName("updatedAt")
	val updatedAt: String? = null
)

data class GetPasalDataItem(

	@field:SerializedName("LawData")
	val lawData: List<LawDataItem?>? = null,

	@field:SerializedName("createdAt")
	val createdAt: String? = null,

	@field:SerializedName("lawId")
	val lawId: Int? = null,

	@field:SerializedName("name")
	val name: String? = null,

	@field:SerializedName("description")
	val description: Any? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("updatedAt")
	val updatedAt: String? = null
)
