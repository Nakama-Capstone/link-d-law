package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class LoginResponse(

	@field:SerializedName("data")
	val data: DataLogin? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class Auth(

	@field:SerializedName("refreshTokenMaxAge")
	val refreshTokenMaxAge: Int? = null,

	@field:SerializedName("accessToken")
	val accessToken: String? = null,

	@field:SerializedName("accessTokenMaxAge")
	val accessTokenMaxAge: Int? = null,

	@field:SerializedName("refreshToken")
	val refreshToken: String? = null
)

data class DataLogin(

	@field:SerializedName("auth")
	val auth: Auth? = null
)
