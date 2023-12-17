package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class RegisterRequest(

	@field:SerializedName("firstName")
	val firstName: String,

	@field:SerializedName("lastName")
	val lastName: String,

	@field:SerializedName("passwordConfirmation")
	val passwordConfirmation: String,

	@field:SerializedName("password")
	val password: String,

	@field:SerializedName("email")
	val email: String
)
