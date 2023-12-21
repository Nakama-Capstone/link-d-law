package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetLawyerResponse(

	@field:SerializedName("data")
	val data: List<LawyerDataItem?>? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class EducationalBackgroundItem(

	@field:SerializedName("major")
	val major: String? = null,

	@field:SerializedName("university")
	val university: String? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("lawyerId")
	val lawyerId: Int? = null
)

data class FirmaHukumItem(

	@field:SerializedName("name")
	val name: String? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("lawyerId")
	val lawyerId: Int? = null
)

data class LawyerDataItem(

	@field:SerializedName("User")
	val user: LawyerUser? = null,

	@field:SerializedName("specialist")
	val specialist: String? = null,

	@field:SerializedName("rate")
	val rate: Int? = null,

	@field:SerializedName("nomorPerandi")
	val nomorPerandi: String? = null,

	@field:SerializedName("firmaHukum")
	val firmaHukum: List<FirmaHukumItem?>? = null,

	@field:SerializedName("fee")
	val fee: Int? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("educationalBackground")
	val educationalBackground: List<EducationalBackgroundItem?>? = null,

	@field:SerializedName("userId")
	val userId: Int? = null
)

data class LawyerUser(

	@field:SerializedName("firstName")
	val firstName: String? = null,

	@field:SerializedName("lastName")
	val lastName: String? = null,

	@field:SerializedName("createdAt")
	val createdAt: String? = null,

	@field:SerializedName("image")
	val image: Any? = null,

	@field:SerializedName("password")
	val password: String? = null,

	@field:SerializedName("middleName")
	val middleName: Any? = null,

	@field:SerializedName("id")
	val id: Int? = null,

	@field:SerializedName("email")
	val email: String? = null,

	@field:SerializedName("updatedAt")
	val updatedAt: String? = null
)
