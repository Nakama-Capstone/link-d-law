package com.nakama.capstone.linkdlaw.screen.detailhukum

import androidx.paging.PagingSource
import androidx.paging.PagingState
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalDataItem
import com.nakama.capstone.linkdlaw.repository.LawRepository

class DetailHukumPagingSource(private val id: Int, private val lawRepository: LawRepository)
    :PagingSource<Int, GetPasalDataItem>(){

    override fun getRefreshKey(state: PagingState<Int, GetPasalDataItem>): Int? {
        return null
    }

    override suspend fun load(params: LoadParams<Int>): LoadResult<Int, GetPasalDataItem> {
        return try {
            
            val response = lawRepository.getPasal(id)
            val lawyerData = response.data?.filterNotNull() ?: emptyList()
            
            LoadResult.Page(
                data = lawyerData,
                prevKey = null,
                nextKey = null
            )
        }catch (e:Exception){
            LoadResult.Error(e)
        }
    }
}