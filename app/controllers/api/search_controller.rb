class Api::SearchController < ApplicationController

  def index
    @results = PgSearch.multisearch(params[:search]);
    @projects = @results.map do |project|
      Project.find_by(id: project.searchable_id)
    end
    render '/api/projects/index.json.jbuilder'
  end

end
