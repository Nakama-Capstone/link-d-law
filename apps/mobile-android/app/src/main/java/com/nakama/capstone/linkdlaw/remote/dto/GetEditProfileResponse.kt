package com.nakama.capstone.linkdlaw.remote.dto

import com.google.gson.annotations.SerializedName

data class GetEditProfileResponse(

	@field:SerializedName("data")
	val data: GetEditProfileResponseData? = null,

	@field:SerializedName("ok")
	val ok: Boolean? = null,

	@field:SerializedName("message")
	val message: String? = null
)

data class GetEditProfileResponseImage(

	@field:SerializedName("generation")
	val generation: String? = null,

	@field:SerializedName("metageneration")
	val metageneration: String? = null,

	@field:SerializedName("kind")
	val kind: String? = null,

	@field:SerializedName("url")
	val url: String? = null,

	@field:SerializedName("selfLink")
	val selfLink: String? = null,

	@field:SerializedName("mediaLink")
	val mediaLink: String? = null,

	@field:SerializedName("bucket")
	val bucket: String? = null,

	@field:SerializedName("storageClass")
	val storageClass: String? = null,

	@field:SerializedName("size")
	val size: String? = null,

	@field:SerializedName("md5Hash")
	val md5Hash: String? = null,

	@field:SerializedName("crc32c")
	val crc32c: String? = null,

	@field:SerializedName("timeStorageClassUpdated")
	val timeStorageClassUpdated: String? = null,

	@field:SerializedName("name")
	val name: String? = null,

	@field:SerializedName("etag")
	val etag: String? = null,

	@field:SerializedName("timeCreated")
	val timeCreated: String? = null,

	@field:SerializedName("id")
	val id: String? = null,

	@field:SerializedName("contentType")
	val contentType: String? = null,

	@field:SerializedName("updated")
	val updated: String? = null
)

data class GetEditProfileResponseData(

	@field:SerializedName("image")
	val image: GetEditProfileResponseImage? = null,

	@field:SerializedName("user")
	val user: GetEditProfileResponseUser? = null
)

data class GetEditProfileResponseUser(

	@field:SerializedName("image")
	val image: String? = null,

	@field:SerializedName("id")
	val id: Int? = null
)
