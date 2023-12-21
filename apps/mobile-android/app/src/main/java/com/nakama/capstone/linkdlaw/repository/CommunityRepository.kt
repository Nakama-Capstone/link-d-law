package com.nakama.capstone.linkdlaw.repository

import com.nakama.capstone.linkdlaw.remote.api.ApiService
import com.nakama.capstone.linkdlaw.remote.api.PostBodyCommunityPost
import com.nakama.capstone.linkdlaw.remote.api.PostBodyCommunityPostComment

class CommunityRepository (private val apiService: ApiService) {
    suspend fun getPosts() = apiService.getCommunityPosts()
    suspend fun getPostsComments(postId: Int) = apiService.getCommunityPostsComments(postId)
    
    suspend fun sendPostComment(postId: Int, content: PostBodyCommunityPostComment) = apiService.sendCommunityPostsComment(postId, content)
    
    suspend fun sendPost(content: PostBodyCommunityPost) = apiService.sendCommunityPost(content)
}