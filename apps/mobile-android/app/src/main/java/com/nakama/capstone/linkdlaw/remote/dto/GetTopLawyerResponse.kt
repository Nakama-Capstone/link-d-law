package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetTopLawyerResponse(

	@field:SerializedName("data")
	val data: List<TopLawyerDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class TopLawyerUser(

	@field:SerializedName("firstName")
	val firstName: String? = null,

	@field:SerializedName("lastName")
	val lastName: String? = null,

	@field:SerializedName("image")
	val image: Any? = null,

	@field:SerializedName("middleName")
	val middleName: Any? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("email")
	val email: String? = null
)

data class TopLawyerDataItem(

	@field:SerializedName("User")
	val user: TopLawyerUser? = null,

	@field:SerializedName("specialist")
	val specialist: String? = null,

	@field:SerializedName("rate")
	val rate: Int? = null,

	@field:SerializedName("nomorPerandi")
	val nomorPerandi: String? = null,

	@field:SerializedName("fee")
	val fee: Int? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("userId")
	val userId: Int? = null
)
