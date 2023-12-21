package com.nakama.capstone.linkdlaw.screen.pengacara

import androidx.paging.PagingSource
import androidx.paging.PagingState
import com.nakama.capstone.linkdlaw.remote.dto.LawyerDataItem
import com.nakama.capstone.linkdlaw.repository.PengacaraRepository

class PengacaraPagingDataSource(private val pengacaraRepository: PengacaraRepository)
    :PagingSource<Int, LawyerDataItem>(){

    override fun getRefreshKey(state: PagingState<Int, LawyerDataItem>): Int? {
        return null
    }

    override suspend fun load(params: LoadParams<Int>): LoadResult<Int, LawyerDataItem> {
        return try {
            
            val response = pengacaraRepository.getLawyers()
            val lawyerData = response.data?.sortedBy { it?.user?.firstName }?.filterNotNull() ?: emptyList()
            LoadResult.Page(
                data = lawyerData,
                prevKey = null,
                nextKey = null
            )
            
        }catch (e: Exception){
            LoadResult.Error(e)
        }
    }
}