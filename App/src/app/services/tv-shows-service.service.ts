import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateTVShowRequest } from 'src/interfaces/CreateTVShowRequest';
import { CreateTVShowResponse } from 'src/interfaces/CreateTVShowResponse';
import { DeleteTVShowShowsRequest } from 'src/interfaces/DeleteTVShowShowsRequest';
import { GetAllTVShowsResponse } from 'src/interfaces/GetAllTVShowsResponse';
import { UpdateTVShowRequest } from 'src/interfaces/UpdateTVShowRequest';

@Injectable({
  providedIn: 'root'
})
/* The TvShowsServiceService class provides methods for creating, retrieving, updating, and deleting TV
shows using HTTP requests. */
export class TvShowsServiceService {
  private apiUrl = `${environment.apiUrl}/TVShows`; 
  constructor(private http: HttpClient) { }
/**
 * The function createTVShow sends a POST request to the specified API URL with the provided request
 * data and returns an Observable of type CreateTVShowResponse.
 * @param {CreateTVShowRequest} request - The `request` parameter in the `createTVShow` function is of
 * type `CreateTVShowRequest`, which is the data structure containing the information needed to create
 * a new TV show. This data structure likely includes details such as the title, genre, cast, and other
 * relevant information about the TV
 * @returns An Observable of type CreateTVShowResponse is being returned.
 */
  createTVShow(request: CreateTVShowRequest): Observable<CreateTVShowResponse> {
    return this.http.post<CreateTVShowResponse>(this.apiUrl, request);
  }

/**
 * The function getAllTVShows() returns an Observable of GetAllTVShowsResponse array by making an HTTP
 * GET request to the specified API URL.
 * @returns An Observable of type GetAllTVShowsResponse[] is being returned.
 */
  getAllTVShows(): Observable<GetAllTVShowsResponse[]> {
    return this.http.get<GetAllTVShowsResponse[]>(this.apiUrl);
  }

  /**
   * The function `updateTVShow` sends a PUT request to update a TV show using the provided request
   * data.
   * @param {UpdateTVShowRequest} request - The `request` parameter in the `updateTVShow` method is an
   * object of type `UpdateTVShowRequest`. This object likely contains the data needed to update a TV
   * show, such as the show's title, description, genre, or any other relevant information. The method
   * sends a PUT request
   * @returns An Observable of type UpdateTVShowRequest is being returned.
   */
  updateTVShow(request: UpdateTVShowRequest): Observable<UpdateTVShowRequest> {
    return this.http.put<UpdateTVShowRequest>(this.apiUrl, request);
  }

  /**
   * The function `deleteTVShow` sends a DELETE request to the API with the provided request body.
   * @param {DeleteTVShowShowsRequest} request - The `request` parameter in the `deleteTVShow` function
   * is of type `DeleteTVShowShowsRequest`, which is used to specify the details of the TV show that
   * needs to be deleted. This parameter is passed as the body of the HTTP DELETE request to the
   * specified API endpoint (`this.apiUrl
   * @returns An Observable of type DeleteTVShowShowsRequest is being returned.
   */
  deleteTVShow(request: DeleteTVShowShowsRequest): Observable<DeleteTVShowShowsRequest> {
    return this.http.request<DeleteTVShowShowsRequest>('DELETE', this.apiUrl, {
      body: request
    });
  }
}