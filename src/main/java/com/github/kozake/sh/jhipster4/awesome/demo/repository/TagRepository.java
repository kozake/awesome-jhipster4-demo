package com.github.kozake.sh.jhipster4.awesome.demo.repository;

import com.github.kozake.sh.jhipster4.awesome.demo.domain.Tag;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tag entity.
 */
@SuppressWarnings("unused")
public interface TagRepository extends JpaRepository<Tag,Long> {

}
