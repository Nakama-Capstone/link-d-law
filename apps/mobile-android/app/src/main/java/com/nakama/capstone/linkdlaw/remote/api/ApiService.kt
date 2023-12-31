package com.nakama.capstone.linkdlaw.remote.api

import com.google.gson.annotations.SerializedName
import com.nakama.capstone.linkdlaw.remote.dto.CreateChatRequest
import com.nakama.capstone.linkdlaw.remote.dto.CreateChatResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetAllChatResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetAllMessageResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostCommentResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetLawsResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerDetailResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetLawyerResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictRequest
import com.nakama.capstone.linkdlaw.remote.dto.GetPredictResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetProfileResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetTanyakimResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetTopLawyerResponse
import com.nakama.capstone.linkdlaw.remote.dto.LoginRequest
import com.nakama.capstone.linkdlaw.remote.dto.LoginResponse
import com.nakama.capstone.linkdlaw.remote.dto.LogoutResponse
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.remote.dto.RegisterResponse
import com.nakama.capstone.linkdlaw.remote.dto.SendMessageRequest
import com.nakama.capstone.linkdlaw.remote.dto.SendMessageResponse
import com.nakama.capstone.linkdlaw.remote.dto.UpdateProfileRequest
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetEditProfileResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetNewDetailResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetNewsResponse
import okhttp3.MultipartBody
import okhttp3.RequestBody
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Multipart
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Part
import retrofit2.http.Path



data class PostBodyCommunityPostComment(

    @field:SerializedName("content")
    val content: String? = null
)
data class PostBodyCommunityPost(

    @field:SerializedName("content")
    val content: String? = null,
    
    @field:SerializedName("title")
    val title: String? = null
)

interface ApiService {

    @POST("/v1/auth/register")
    suspend fun register(
        @Body registerRequest: RegisterRequest
    ): RegisterResponse

    @POST("/v1/auth/login")
    suspend fun login(
        @Body loginRequest: LoginRequest
    ): LoginResponse

    @GET("/v1/auth/logout")
    suspend fun logout(): LogoutResponse

    @GET("/v1/profile")
    suspend fun getProfile(): GetProfileResponse

    @PUT("/v1/profile")
    suspend fun updateProfile(
        @Body updateProfileRequest: UpdateProfileRequest
    ): GetProfileResponse

    @Multipart
    @POST("/v1/image")
    suspend fun updateImageProfile(
        @Part imgFile: MultipartBody.Part
    ): GetEditProfileResponse

    @GET("/v1/laws")
    suspend fun getLaws(): GetLawsResponse

    @GET("/v1/laws/{law}")
    suspend fun getPasal(
        @Path("law") lawId: Int
    ): GetPasalResponse

    @GET("/v1/chats")
    suspend fun getAllChat(): GetAllChatResponse

    @POST("/v1/chats")
    suspend fun createChat(
        @Body user2Id: CreateChatRequest
    ): CreateChatResponse

    @GET("/v1/chats/{id}")
    suspend fun getAllMessage(
        @Path("id") chatId: Int
    ): GetAllMessageResponse

    @POST("/v1/chats/{id}")
    suspend fun sendMessage(
        @Path("id") user2Id: Int,
        @Body sendMessageRequest: SendMessageRequest
    ): SendMessageResponse

    @POST("/v1/kimai/role/predict")
    suspend fun getPredictResult(
        @Body getPredictRequest: GetPredictRequest
    ): GetPredictResponse

    @Multipart
    @POST("/v1/kimai/tanyakim/search")
    suspend fun getTanyakimResult(
        @Part("user_query") query: RequestBody
    ): GetTanyakimResponse

    @GET("/v1/lawyers")
    suspend fun getLawyers(): GetLawyerResponse

    @GET("/v1/lawyers/{id}")
    suspend fun getLawyerDetail(
        @Path("id") lawyerId: Int
    ): GetLawyerDetailResponse

    @GET("/v1/posts")
    suspend fun getCommunityPosts(): GetCommunityPostResponse

    @GET("/v1/posts/{id}/comments")
    suspend fun getCommunityPostsComments(
        @Path("id") postId: Int
    ): GetCommunityPostCommentResponse

    @POST("/v1/posts/{id}/comments")
    suspend fun sendCommunityPostsComment(
        @Path("id") postId: Int,
        @Body postBodyCommunityPost: PostBodyCommunityPostComment
    )

    @POST("/v1/posts")
    suspend fun sendCommunityPost(
        @Body postBodyCommunityPost: PostBodyCommunityPost
    )
    
    @GET("/v1/lawyers/top")
    suspend fun getTopLawyer(): GetTopLawyerResponse
    

    @GET("/v1/news")
    suspend fun getNews(): GetNewsResponse
    @GET("/v1/news/detail")
    suspend fun getNewsDetail(link: String): GetNewDetailResponse
}