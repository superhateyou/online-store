export const CollapseItem = ({ data }) => {
	return (
		<li class="navigation__collapse-item vertical-menu__item">
			<a href={data && data.link} class="vertical-menu__name">
				{data && data.title}
			</a>
		</li>
	)
}